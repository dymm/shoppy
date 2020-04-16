import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppAuthGuard } from './auth/app.authguard';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AppAuthGuard, useClass: FakeAppAuthGuard },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  /*
    it(`should have as title 'shoppy-ui'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('shoppy-ui');
    });
  
    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.content span').textContent).toContain('shoppy-ui app is running!');
    });*/
});

class FakeAppAuthGuard { }
