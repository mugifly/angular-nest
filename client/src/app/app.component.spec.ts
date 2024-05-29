import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { MaterialModule } from 'src/material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, AppComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render card', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain(
      'What is this?',
    );
  });
});
