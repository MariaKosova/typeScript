import { WeatherWrapper } from "./styles";
import {WeatherHeader} from "./styles";
import {WeatherForm} from "./styles";
import {WeatherMainContainer} from "./styles";
import Button from "components/Button/Button";
//import {ButtonComp} from "./styles";
//import {InputComp} from "components/Input/Input";
import{InputComp} from "./styles";
//import { useFormik } from "formik";

function Weather() {
  return (
    <WeatherWrapper>
    
    <WeatherHeader>Weather App
    </WeatherHeader>
   
    <WeatherMainContainer> 
    <WeatherForm>
      <InputComp
      name="cityName"
      placeholder="Enter the name of the city" 
      required
     // label="text"
     // onInputChange={formik.handleChange}
     // value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
     // error={formik.errors[LOGIN_FIELD_NAMES.EMAIL]}
      
      >
      </InputComp>

    <Button type="submit" name="Search"/>
  


    </WeatherForm>
    </WeatherMainContainer>


    </WeatherWrapper>
  )
}

export default Weather;
