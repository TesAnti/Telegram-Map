# Telegram Nearby Map


## Docker

1. Замовляєм сервак на DO з імаджем Docker
2. Регаєм ключі для додатку [тут](https://my.telegram.org/)
3. пишем в терміналі(замінивши параметри на свої)

```
docker run -it -e API_ID=СЮДИ_ПИШЕМ_APP_API_ID -e API_HASH=СЮДИ_ПИШЕМ_APP_API_HASH -p 3000:3000 tesanti/telegram-map
```
4. http://ip-сервера:3000/
