import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public formData: any;
  myWeather: any;
  temperature: number=0;
  humidity: number=0;
  weatherInfo: any;
 description:string='';
 iconURL: string='';
 Feelslike: number=0;
  constructor(private weatherService: WeatherService) {}   
   

  ngOnInit(): void{

    // Fetch form data from local storage
    const formDataJson = localStorage.getItem('formUsers');
    let postalCode;
    if (formDataJson) {
      this.formData = JSON.parse(formDataJson);
      console.log('formData:', this.formData);
       postalCode=this.formData[0].postalCode
    }
    this.weatherService.getWeather(postalCode).subscribe({
      next: (res)=>{
        console.log(res);
        this.myWeather=res;
        this.temperature=this.myWeather.main.temp;
        this.humidity=this.myWeather.main.humidity;
        this.description=this.myWeather.weather[0].main;
        this.Feelslike=this.myWeather.main.feels_like;
        
        this.iconURL='http://openweathermap.org/img/wn/'+this.myWeather.weather[0].icon+'@2x.png';
      },
      error: (error)=>console.log(error.message),
      complete: ()=>console.log('API call completed')
      
      
    })
    
    // Fetch weather information from local storage
    const weatherInfoJson = localStorage.getItem('weatherInfo');
    if (weatherInfoJson) {
      this.weatherInfo = JSON.parse(weatherInfoJson);
    }
  }

}
