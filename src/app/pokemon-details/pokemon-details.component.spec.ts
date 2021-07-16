import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';

class RouterStub {
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          locationId: 'someId',
          locationName: 'someName',
        },
      },
    };
  }
}

// fdescribe('PokemonDetailsComponent', () => {
//   let component: PokemonDetailsComponent;
//   let fixture: ComponentFixture<PokemonDetailsComponent>;
//   let router: jasmine.SpyObj<Router>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [PokemonDetailsComponent],
//       imports: [RouterTestingModule, HttpClientTestingModule],
//       providers: [{ provide: Router, useClass: RouterStub }],
//     }).compileComponents();
//   }));

//   it('should create with a PokemonDetailsComponent session', () => {
//     router = TestBed.get(Router);
//     //router = fixture.debugElement.injector.get(Router);
//     spyOn(router, 'getCurrentNavigation').and.returnValue({
//       extras: { state: { message: 'msg' } },
//     } as any);
//     fixture = TestBed.createComponent(PokemonDetailsComponent);
//     component = fixture.componentInstance;

//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });
// });
