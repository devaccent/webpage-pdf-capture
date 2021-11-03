# Webpage PDF Capture

### Usage

1. **_Start Docker container_**

    ```bash
    $ docker-compose up -d
    ```

2. **_Generate PDF from web page_**

    ```
    localhost:3010/api/capture/pdf?pageUrl=https://devaccent.com
    ```


### Invoices to test out

```
localhost:3010/api/capture/pdf?pageUrl=https://www.bootdey.com/snippets/preview/invoice-page?full-screen=true
```
```
localhost:3010/api/capture/pdf?pageUrl=https://www.bootdey.com/snippets/preview/white-invoice?full-screen=true
```
