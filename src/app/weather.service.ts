import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getWeather(postalCode:string){
    
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${postalCode},IN&appid=1f6acbb13e752731c024cb95c16f24a3&unit=standard`);
  }
}
