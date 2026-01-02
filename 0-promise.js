/**
 * getResponseFromAPI funksiyası - sadəcə Promise qaytarır
 * @returns {Promise} - Yeni yaradılmış Promise obyekti
 */
export default function getResponseFromAPI() {
  // Yeni Promise yaradırıq və qaytarırıq
  return new Promise((resolve, reject) => {
    // Bu tapşırıq üçün Promise-in daxili məntiqi vacib deyil
    // Promise sadəcə yaradılmalı və qaytarılmalıdır
    // İstəsək boş qoya bilərik və ya sadə bir iş görə bilərik
    
    // Məsələn:
    // resolve("API-dan cavab"); // Promise-i həll edə bilərik
    
    // Və ya heç nə etməyə bilərik:
    // Boş qalır - Promise pending (gözləyən) vəziyyətdə qalır
  });
}

// Alternativ sadə versiya (qısa):
// export default function getResponseFromAPI() {
//   return new Promise(() => {});
// }
