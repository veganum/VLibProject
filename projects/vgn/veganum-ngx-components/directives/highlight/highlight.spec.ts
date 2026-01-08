import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { Highlight } from './highlight';

@Component({
  template: `<p [vgnHighlight]="text" [highLightedText]="highlight" [color]="color"></p>`,
})
class TestHostComponent {
  text = 'Angular testing highlight';
  highlight = '';
  color = 'yellow';
}

describe('Highlight', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Highlight, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should render plain text when no highlighted text is provided', fakeAsync(() => {
    fixture.detectChanges();
    flush();

    const paragraph = fixture.nativeElement.querySelector('p') as HTMLElement;

    expect(paragraph.textContent).toBe('Angular testing highlight');
    expect(paragraph.querySelector('span')).toBeNull();
  }));

  it('should wrap highlighted text with the selected color', fakeAsync(() => {
    fixture.componentInstance.highlight = 'testing';
    fixture.componentInstance.color = 'orange';

    fixture.detectChanges();
    flush();

    const paragraph = fixture.nativeElement.querySelector('p') as HTMLElement;

    expect(paragraph.innerHTML).toContain(
      '<span style="background-color:orange">testing</span>'
    );
  }));
});
