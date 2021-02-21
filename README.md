# Notilert

**Notilert is a highly customisable yet simple javascript notification component integrates with ease within your app !**

![npm bundle size](https://img.shields.io/bundlephobia/min/notilert)
![npm](https://img.shields.io/npm/dw/notilert)
![npm](https://img.shields.io/npm/v/notilert)
![NPM](https://img.shields.io/npm/l/notilert)

<p align="center">
  <img src="https://media.giphy.com/media/RBfkjFpVyUILPde6zq/giphy.gif">
</p>

## demo 

- [live Notilert demo](https://hijenhek.github.io/notilert-demo/)

## setup

```bash 

npm install --save notilert

```
```javascript

import Notilert from 'notilert' ;

```
## Usage

create an instance of the Notilert class enter options and everything else is handled automatically .

```javascript

// simple
new Notilert({content : 'hello from notilert'})

// more options ? hold my beer !
new Notilert({content : ' i said hold my beer ! ' ,
                    position : 'bottom-left',
                    timeout : 5,
                    color : 'white',
                    bgColor : 'black',                   
             });
```


## Options

  1. __content__ : plain text default is 'test' 
  
  2. __position__ : for now there are 4 possible positions
      - 'top-left'
      - 'top-right'
      - 'bottom-left'
      - 'bottom-right'
  
  3. __color__ : use css values ( #000000 , black , rgb(0,0,0) etc...)
  
  4. __bgColor__ : same as color
  
  5. __width__ : use css values ( 2rem , 32px , em % etc...)
   
  6. __height__ : same as width
   
  7. __timeout__ : defined in seconds
   
  8. __closeable__ : 'true' for the close button , false turn it non closeable 
  
  9. __type__ : select a predifined type instead of custom inputs 
      - 'success' : green
      - 'danger' : red
      - 'alert' : yellowish
      - 'default' : ugly black and gray (test)
  
## Methods (manual handle)

- ...

## Demo repo 
download the demo project from here : [notilert-demo](https://github.com/HijenHEK/notilert-demo) 

## License

[MIT](https://choosealicense.com/licenses/mit/)
