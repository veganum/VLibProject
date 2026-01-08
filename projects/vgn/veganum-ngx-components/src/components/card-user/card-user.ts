import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CardUserDto, UserName } from './models/card-user';
import { NgClass } from '@angular/common';

@Component({
  selector: 'vgn-card-user',
  imports: [NgClass],
  templateUrl: './card-user.html',
  styleUrl: './card-user.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardUser {
  @Input({ required: true }) user!: CardUserDto;
  @Input() check = false;
  @Input() cardType = '';

  @Output() checked = new EventEmitter<UserName>();

  onCheck(): void {
    this.checked.emit(this.user.name);
  }
}
