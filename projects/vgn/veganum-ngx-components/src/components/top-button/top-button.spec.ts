import { ViewportScroller } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { TopButton } from './top-button';

class ViewportScrollerStub {
  position: [number, number] = [0, 0];

  // Vitest spy
  scrollToPosition = vi.fn();

  getScrollPosition(): [number, number] {
    return this.position;
  }
}

describe('TopButton', () => {
  let component: TopButton;
  let fixture: ComponentFixture<TopButton>;
  let viewportScroller: ViewportScrollerStub;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopButton],
      // Provide the stub for the Angular token
      providers: [{ provide: ViewportScroller, useClass: ViewportScrollerStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(TopButton);
    component = fixture.componentInstance;

    // Inject by token and cast safely
    viewportScroller = TestBed.inject(ViewportScroller) as unknown as ViewportScrollerStub;

    // Optional: reset spies between tests (safe even if not used)
    vi.clearAllMocks();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should hide the icon when text input is provided', () => {
    component.text = 'Subir';
    component.showButton.set(true);

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const span = element.querySelector('button span');
    const svg = element.querySelector('button svg');

    expect(component.showIcon).toBe(false);
    expect(span?.textContent ?? '').toContain('Subir');
    expect(svg).toBeNull();
  });

  it('should toggle button visibility when scrolling', () => {
    viewportScroller.position = [0, 300];
    component.onWindowScroll();
    expect(component.showButton()).toBe(true);

    viewportScroller.position = [0, 100];
    component.onWindowScroll();
    expect(component.showButton()).toBe(false);
  });

  it('should scroll to top when click action is invoked', () => {
    component.scrollToTop();
    expect(viewportScroller.scrollToPosition).toHaveBeenCalledWith([0, 0]);
  });
});
