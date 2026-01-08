import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUser } from './card-user';
import { CardUserDto } from './models/card-user';

describe('CardUser', () => {
  let component: CardUser;
  let fixture: ComponentFixture<CardUser>;

  const user: CardUserDto = {
    name: { first: 'Ana', last: 'Diaz' },
    picture: { medium: 'https://example.com/ana.jpg', thumbnail: 'thumb' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardUser],
    }).compileComponents();

    fixture = TestBed.createComponent(CardUser);
    component = fixture.componentInstance;
    component.user = user;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render user name and avatar class when cardType is avatar', () => {
    component.cardType = 'avatar';

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const img = element.querySelector('img');
    const name = element.querySelector('.vgn-card-user--info');

    expect(img?.classList.contains('vgn-card-user--avatar')).toBe(true);
    expect(img?.getAttribute('src')).toBe(user.picture.medium);
    expect(name?.textContent).toContain('Ana');
    expect(name?.textContent).toContain('Diaz');
  });

  it('should emit user name when checkbox is clicked', () => {
    const emitSpy = vi.spyOn(component.checked, 'emit');
    component.check = true;

    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    checkbox.click();

    expect(emitSpy).toHaveBeenCalledWith(user.name);
  });
});
