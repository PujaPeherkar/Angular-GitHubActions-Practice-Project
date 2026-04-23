import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { throwError } from 'rxjs';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const API_KEY = 'Pooja'
  const request = req.clone({
    setHeaders:{
      'API_KEY':API_KEY
    }
  })
  
  return next(request).pipe( map((item: any) =>{return item}),
    catchError((error) => {
      // 🔴 Handle errors globally here
      if (error.status === 0) {
        alert('⚠️ Network error: Please check your internet connection.');
      } else if (error.status === 400) {
        alert('⚠️ Bad request. Please try again.');
      } else if (error.status === 401) {
        alert('⚠️ Unauthorized. Please login again.');
      } else if (error.status === 403) {
        alert('⚠️ Forbidden. You don’t have permission.');
      } else if (error.status === 404) {
        alert('⚠️ Resource not found (404).');
      } else if (error.status === 500) {
        alert('⚠️ Internal Server Error (500). Please try later.');
      } else {
        alert(`⚠️ Unexpected error: ${error.message}`);
      }

      // Pass the error forward if needed
      return throwError(() => error);
    })
  );
};
