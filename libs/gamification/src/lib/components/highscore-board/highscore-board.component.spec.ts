import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighscoreBoardComponent } from './highscore-board.component';

describe('HighscoreBoardComponent', () => {
  let component: HighscoreBoardComponent;
  let fixture: ComponentFixture<HighscoreBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighscoreBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighscoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
