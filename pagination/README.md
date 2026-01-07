# Pagination - Səhifələmə Layihəsi

Bu layihə Python dilində səhifələmə (pagination) mexanizmlərini həyata keçirir. Layihə 4 əsas tapşırıqdan ibarətdir:

## Tapşırıqlar

### 0. Sadə Köməkçi Funksiya
**Fayl:** `0-simple_helper_function.py`

`index_range` funksiyası iki parametr qəbul edir:
- `page` (int): Cari səhifə nömrəsi (1-dən başlayır)
- `page_size` (int): Hər səhifədəki element sayı

Funksiya iki elementli tuple qaytarır: (start_index, end_index)

**Formula:**
- start_index = (page - 1) × page_size
- end_index = page × page_size

### 1. Sadə Səhifələmə
**Fayl:** `1-simple_pagination.py`

`Server` sinfi popular uşaq adları CSV faylından oxuyur və `get_page` metodu ilə müəyyən səhifəni qaytarır.

### 2. Hipermedia Səhifələmə
**Fayl:** `2-hypermedia_pagination.py`

`get_hyper` metodu əlavə metadata ilə səhifə məlumatlarını qaytarır:
- page_size
- page
- data
- next_page
- prev_page
- total_pages

### 3. Silinməyə Davamlı Hipermedia Səhifələmə
**Fayl:** `3-hypermedia_del_pagination.py`

Dataset-dən elementlər silindikdə belə düzgün işləyən səhifələmə mexanizmi.

## Nümunə İstifadə

```python
# 0. Tapşırıq üçün nümunə
from 0-simple_helper_function import index_range

start, end = index_range(page=1, page_size=10)
print(f"Başlanğıc: {start}, Bitiş: {end}")  # Nəticə: Başlanğıc: 0, Bitiş: 10
