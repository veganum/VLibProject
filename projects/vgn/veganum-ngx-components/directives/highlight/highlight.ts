import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
  afterNextRender,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[vgnHighlight]',
})
export class Highlight implements OnChanges {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private injector = inject(Injector);

  @Input('vgnHighlight') fullText = '';
  @Input() highLightedText = '';
  @Input() color = 'yellow';

  ngOnChanges(_: SimpleChanges): void {
    if (isPlatformBrowser(this.platformId)) {
      runInInjectionContext(this.injector, () => {
        afterNextRender(() => this.apply());
      });
    } else {
      this.apply();
    }
  }

  private apply(): void {
    const host = this.el.nativeElement;
    const text = this.fullText ?? '';
    const q = this.highLightedText ?? '';

    if (!q) {
      this.renderer.setProperty(host, 'textContent', text);
      return;
    }

    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');

    const html = text.replace(
      regex,
      (m) => `<span style="background-color:${this.color}">${m}</span>`
    );

    this.renderer.setProperty(host, 'innerHTML', html);
  }
}
