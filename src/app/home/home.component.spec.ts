import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from '../home/home.component';
import { ApiService } from '../api.service';
import { FilterPipe } from '../filter.pipe';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';

describe('HomeComponent', () => {
  let pipe = new FilterPipe();
  let items = [{name: 'testing'}];
  // let service: ApiService;
  const pokemonObj = {
    id: 1,
    name: 'bulbasaur',
    weight: 69,
    height: 7,
    base_experience: 64,
  };
  beforeEach(async(() => {
    // pipe = new Ng2SearchPipeModule();
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HomeComponent, FilterPipe],
      providers: [ApiService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should not return an object in the service', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ApiService);
    let spy_getPosts = spyOn(service, 'sendGetRequest').and.callFake(() => {
      return Rx.of([{ pokemonObj }]).pipe(delay(1000));
    });
    component.getPostDetails();
    expect(component.pokemons).toEqual([]);
    tick(1000);
    // expect(component.pokemons).toEqual([pokemonObj]);
  }));
  it('should return object in a service', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ApiService);
    let spy_getPosts = spyOn(service, 'sendGetRequest').and.callFake(() => {
      // return pokemonObj;
      return Rx.of([{ id: 1, name: 'bulbasaur' }]).pipe(delay(1000));
    });
    component.getPostDetails();
    tick(2000);
    expect(component.pokemons).toEqual([{ id: 1, name: 'bulbasaur' }]);
  }));
});

