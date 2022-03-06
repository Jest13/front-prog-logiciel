import {MeubleService} from "./meuble.service";
import {TestBed} from "@angular/core/testing";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {async, Observable} from "rxjs";
import {Meuble} from "./meuble";
import {inject} from "@angular/core";

describe("MeubleService", () => {

  let meubleService: MeubleService,
  httpTestingController: HttpClientTestingModule;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MeubleService,

      ]
    });

    meubleService = TestBed.get(MeubleService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('devrait vérifier si les meubles spécifiées sont présentes dans le tableau');
  // @ts-ignore
  const cities = meubleService.getMeublesList();

  expect(cities).toContain('Meuble1');
  expect(cities).toContain('Meuble2');


  it('devrait vérifier si une nouvelle ville est ajoutée au tableau', () => {
    // Arrange
    const newMeuble = 'Table';

    // Act
    MeubleService.createMeuble(newMeuble);

    // Assert
    expect(meubleService.getMeublesList).toContain(newMeuble);
  });

  it('doit inclure le nom dans meuble_name', () => {
    const meuble_name = 'hari';

    expect(meuble_name(meuble_name)).toContain(meuble_name);


    it(`devrait récupérer les meubles en tant qu'observable`, async(inject([HttpTestingController, MeubleService],
      (httpClient: HttpTestingController, postService: MeubleService) => {

        const postItem = [
          {
            "meuble_id": 3,
            "meuble_name": "test3",
            "meuble_prix": "9999",
            "meuble_info": "kDKKDKDKK2D",
            "meuble_short_info": "00s",
            "meuble_type": "LZLZ",
            "meuble_stock": "99"
          },
          {
            "meuble_id": 4,
            "meuble_name": "test4",
            "meuble_prix": "9999",
            "meuble_info": "kDKKDKDK5RKD",
            "meuble_short_info": "00s",
            "meuble_type": "LZLZ",
            "meuble_stock": "99"
          },
          {
            "meuble_id": 5,
            "meuble_name": "test5",
            "meuble_prix": "9999",
            "meuble_info": "kDKKFFFDKDKKD",
            "meuble_short_info": "00s",
            "meuble_type": "LZLZ",
            "meuble_stock": "99"
          }
        ];

        MeubleService.getMeublesList()
          .subscribe((posts: any) => {
            expect(posts.length).toBe(3);
          });

      })));

  });
