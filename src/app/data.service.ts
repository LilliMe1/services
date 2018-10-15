import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  datax=[{
    "id": 1,
    "ip_address": "51.66.233.183",
    "pname": "list-manage.com"
  }, {
    "id": 2,
    "ip_address": "100.104.173.254",
    "pname": "fotki.com"
  }, {
    "id": 3,
    "ip_address": "50.31.245.116",
    "pname": "house.gov"
  }, {
    "id": 4,
    "ip_address": "9.74.58.169",
    "pname": "addthis.com"
  }, {
    "id": 5,
    "ip_address": "82.50.221.237",
    "pname": "va.gov"
  }, {
    "id": 6,
    "ip_address": "144.93.30.50",
    "pname": "harvard.edu"
  }, {
    "id": 7,
    "ip_address": "93.188.48.107",
    "pname": "engadget.com"
  }, {
    "id": 8,
    "ip_address": "48.230.74.227",
    "pname": "hud.gov"
  }, {
    "id": 9,
    "ip_address": "52.178.78.109",
    "pname": "go.com"
  }, {
    "id": 10,
    "ip_address": "151.104.202.18",
    "pname": "prlog.org"
  }, {
    "id": 11,
    "ip_address": "157.12.219.142",
    "pname": "go.com"
  }, {
    "id": 12,
    "ip_address": "34.186.154.9",
    "pname": "desdev.cn"
  }, {
    "id": 13,
    "ip_address": "64.127.205.6",
    "pname": "abc.net.au"
  }, {
    "id": 14,
    "ip_address": "143.183.232.124",
    "pname": "nba.com"
  }, {
    "id": 15,
    "ip_address": "242.16.5.204",
    "pname": "godaddy.com"
  }, {
    "id": 16,
    "ip_address": "231.224.87.193",
    "pname": "vk.com"
  }, {
    "id": 17,
    "ip_address": "58.38.184.104",
    "pname": "yahoo.com"
  }, {
    "id": 18,
    "ip_address": "106.78.134.80",
    "pname": "google.com.hk"
  }, {
    "id": 19,
    "ip_address": "196.13.81.194",
    "pname": "networksolutions.com"
  }, {
    "id": 20,
    "ip_address": "47.24.240.190",
    "pname": "ezinearticles.com"
  }];
  constructor() { }

  addData(x , y){

    let arr = [...this.datax, {"id": this.datax.length + 1, "ip_address":x, "pname": y}];
    this.datax = arr;
  }
}
