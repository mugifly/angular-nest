/**
 * Launcher for API Client Generator
 */

'use strict';

const fs = require('fs');
const crypto = require('crypto');
const childProcess = require('child_process');
const fetch = require('node-fetch');
const json2yaml = require('json2yaml');

class APIClientGeneratorLauncher {
  static API_JSON_URL = 'http://localhost:3000/api/docs-json';
  static SERVER_DIR = `${__dirname}/../server`;
  static CLIENT_DIR = `${__dirname}/../client`;
  static API_DOC_YAML_PATH = `${APIClientGeneratorLauncher.SERVER_DIR}/api.yaml`;
  static API_CLIENT_OUTPUT_PATH = `${APIClientGeneratorLauncher.CLIENT_DIR}/src/.api-client`;

  constructor() {}

  async start() {
    let apiDoc = null;
    if (1 < process.argv.length && process.argv.indexOf('online') != -1) {
      try {
        apiDoc = await this.getApiDocOnline();
      } catch (e) {
        console.warn(e);
      }
    }
    if (!apiDoc) {
      apiDoc = this.getApiDocOffline();
    }

    const apiDocYaml = json2yaml.stringify(apiDoc);
    if (!this.shouldGenerateApiClient(apiDocYaml)) {
      return;
    }
    fs.writeFileSync(APIClientGeneratorLauncher.API_DOC_YAML_PATH, apiDocYaml);

    this.generateApiClient();
    console.log(
      'API Client was generated to ',
      APIClientGeneratorLauncher.API_CLIENT_OUTPUT_PATH,
    );
  }

  async getApiDocOnline() {
    const res = await fetch(APIClientGeneratorLauncher.API_JSON_URL);
    return await res.json();
  }

  getApiDocOffline() {
    const result = childProcess.execSync(
      `ts-node --project \"${APIClientGeneratorLauncher.SERVER_DIR}/tsconfig.json\" --require tsconfig-paths/register \"${APIClientGeneratorLauncher.SERVER_DIR}/src/openapi-doc-generator.ts\"`,
    );
    return JSON.parse(result.toString());
  }

  shouldGenerateApiClient(yaml) {
    if (!this.existsApiClient()) return true;

    if (!fs.existsSync(APIClientGeneratorLauncher.API_DOC_YAML_PATH))
      return true;

    let savedHash;
    try {
      const savedSum = crypto.createHash('sha1');
      savedSum.update(
        fs
          .readFileSync(APIClientGeneratorLauncher.API_DOC_YAML_PATH)
          .toString(),
      );
      savedHash = savedSum.digest('hex');
    } catch (e) {
      return true;
    }

    const yamlSum = crypto.createHash('sha1');
    yamlSum.update(yaml);
    const yamlHash = yamlSum.digest('hex');

    return yamlHash !== savedHash;
  }

  existsApiClient() {
    return fs.existsSync(
      `${APIClientGeneratorLauncher.API_CLIENT_OUTPUT_PATH}/api.module.ts`,
    );
  }

  generateApiClient() {
    childProcess.execSync(
      `ng-openapi-gen --input \"${APIClientGeneratorLauncher.API_DOC_YAML_PATH}\" --output \"${APIClientGeneratorLauncher.API_CLIENT_OUTPUT_PATH}\"`,
    );
  }
}

const launcher = new APIClientGeneratorLauncher();
launcher.start();
