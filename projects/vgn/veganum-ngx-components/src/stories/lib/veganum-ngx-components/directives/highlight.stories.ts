import { Highlight } from './../../../../../directives/highlight/highlight';
import { Component, Input, signal } from '@angular/core';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [Highlight],
  template: `
    <div style="margin-bottom: 10px;">
      <input
        style="margin-bottom: 10px;"
        type="text"
        placeholder="search"
        (input)="searchText($event)"
      />
      <div [vgnHighlight]="text()" [highLightedText]="textToFind()" [color]="color">
        {{ text() }}
      </div>
    </div>
  `,
})
export class DummyComponent {
  @Input() color: string = 'yellow';

  public textToFind = signal<string>('');
  public text = signal<string>(
    'Curso de librerías de Angular, texto de prueba para resaltar utilizando directivas personalizadas.'
  );

  public searchText(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.textToFind.set(inputElement.value as string);
  }
}

const hightlight: Meta<DummyComponent> = {
  title: 'veganum-ngx-components/Directives/Highlight',
  component: DummyComponent,
  decorators: [
    moduleMetadata({
      imports: [Highlight],
    }),
  ],
};

export default hightlight;

type Story = StoryObj<DummyComponent>;

export const BASIC: Story = {
  name: 'Basic',
  args: {
    color: 'yellow',
  },
};

export const GREEN: Story = {
  name: 'Green',
  args: {
    color: 'green',
  },
};

