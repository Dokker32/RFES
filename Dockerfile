# Dockerfile
FROM nginx:alpine

# Копируем ВСЕ файлы сайта
COPY . /usr/share/nginx/html/

# Устанавливаем правильные права
RUN chmod -R 755 /usr/share/nginx/html/

# Открываем порт
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]