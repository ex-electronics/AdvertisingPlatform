import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Noty from 'noty';

import 'rxjs/add/operator/toPromise';

import {Hosting} from '../config/hosting';
import {NotyUtil} from '../utils/noty.util';

@Injectable()
export class PaymentService {
    public config: any;

    public constructor(
        private http: HttpClient
    ) {
        this.config = new Hosting;
    }

}
