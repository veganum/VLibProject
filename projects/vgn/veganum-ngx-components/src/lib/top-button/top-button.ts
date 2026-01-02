import { ViewportScroller, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'vgn-top-button',
  imports: [NgStyle],
  templateUrl: './top-button.html',
  styleUrl: './top-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopButton implements OnInit {
  private _viewportScroller = inject(ViewportScroller);

  @Input() text: string = '';
  @Input() showIcon: boolean = true;
  @Input() color: string = '#068fea';

  public showButton = signal(false);
  private readonly SCROLL_TO_DISPLAY = 200; // Convertir a constante regular
  private readonly TOP_POSITION = signal<[number, number]>([0, 0]);

  ngOnInit(): void {
    if (this.text) {
      this.showIcon = false;
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop = this._viewportScroller.getScrollPosition();
    this.showButton.set(scrollTop[1] > this.SCROLL_TO_DISPLAY);
  }

  public scrollToTop(): void {
    this._viewportScroller.scrollToPosition(this.TOP_POSITION());
  }
}
