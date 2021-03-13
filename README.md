# PhotoChannel
 - [Türkçe](#türkçe) 
	 - [Uygulamanın amacı](#uygulamanın-amacı)
	 - [Özellikler](#özellikler)
	 - [Kullanılan Teknolojiler](#kullanılan-teknolojiler---used-technologies)
 - [English](#english)
	 - [Purpose of the application](#purpose-of-the-application)
	 - [Features](#features)
	 - [Used technologies](#kullanılan-teknolojiler---used-technologies)
 - [Gifs](#gifs)

## Türkçe
### Uygulamanın amacı
Uygulama, youtube ve instagramın bazı özelliklerini birleştirmeye çalışmıştır. Youtube'daki kanal oluşturma ve abone olma, İnstagramdaki fotoğraf paylaşma, beğenme ve yorum yapma kısımlarından ilham almıştır. Bu yönde kullanıcılar kanal oluşturup bu kanallarda fotoğraf paylaşabilir, yorum yapabilir veya fotoğraf beğenebilirler. Bu kanalları aynı zamanda etiketleyebilir ve buna göre kanlları filtreleyip ilgilendiğimiz alanlardaki kanalları bulabiliriz.
### Özellikler

 1. [**Hesap oluşturma**](#register)
 2. [**Kanal oluşturma**](#channel)
 3. [**Profil sayfası**](#comment)
	 - Paylaşılan fotoğrafları görüntüleme
	 - Beğenilen fotoğrafları görüntüleme
	 - Yapılan yorumları görüntüleme
	 - Abonelikleri görüntüleme
	 - Kullanıcının kanallarını görüntüleme
 4. [**Kanal sayfası**](#channel)
	 - Kanalda fotoğraf paylaşma
	 - Kanal galerisini görüntüleme
	 - Kanal aboneleri ve kanal sahibini görüntüleme
 5. [**Fotoğraf**](#photo)
	 - Fotoğraf beğenme
	 - Fotoğrafa yorum yapma
	 - Beğenenleri görüntüleme
	 - Yorumları görüntüleme
 6. [**Ana sayfa**](#home-page)
	- Mevcut kullanıcının akışını görüntüleme
	- En çok beğenilen fotoğrafları görüntüleme
	- En çok yorum yapılan fotoğrafları görüntüleme
	- En çok abonesi olan kanalları görüntüleme
	- [Kategoriye göre kanal filtreleme](#searching-channel-filter)

> Projenin backendi asp.net core web api ile yazılmıştır.[Buradan](https://github.com/AliYildizoz909/PhotoChannel) bakabilirsiniz.

## English
### Purpose of the application
The application tried to combine some features of youtube and instagram. It is inspired by creating and subscribing channels on Youtube, sharing , liking and commenting photos on Instagram. In this direction, users can create channels and share photos, comment or like photos in these channels. We can also tag these channels and filter the channels accordingly and find channels in the areas we are interested in.
### Features

 1. [**Creating an account**](#register)
 2. [**Creating channels**](#channel)
 3. [**Profile page**](#comment)
	- Viewing shared photos
	- Viewing liked photos
	- Viewing comments
	- Viewing subscriptions
	- Viewing the user's channels
 4. [**Channel page**](#channel)
	- Sharing photos on the channel
	- Viewing channel gallery
	- Viewing channel subscribers and channel owner
 5. [**Photo**](#photo)
	- Liking a photo
	- Doing comment on the photo
	- Viewing likes
	- Viewing comments
 6. [**Home page**](#home-page)
	- Viewing current user's stream
	- Viewing the most liked photos
	- Viewing photos with the most comments
	- Viewing channels with the most subscribers
	- [Filtering channels by category](#searching-channel-filter)

> The backendi of the project was written with the asp.net core web api. You can look from [here](https://github.com/AliYildizoz909/PhotoChannel).

## Kullanılan teknolojiler - Used technologies

 - **Backend**
	 - Asp.Net Core Web API 3.1
	 - .Net standart 2.0
	 - Entity Framework Core
	 - Fluent Validation
	 - Cloudinary
	 - InMemory Cache
	 - NLog
	 - Filtering
	 - SwaggerUI
	 - N katmanlı mimari - N-Tier Architecture
- **FrontEnd**
	- reactjs
	- react-bootstrap
	- bootstrap
	- filepond
	- redux
	- redux-thunk
	- cloudinary-react
	- react-router-dom
	- connected-react-router
	- simple-react-validator
	- react-photo-gallery
	- font-awesome
## Gifs
#### Register![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/Register%281%29.gif?raw=true) 
#### Update Account![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/UpdateAccount%282%29.gif?raw=true)  
#### Channel![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/Channel%283%29.gif?raw=true)  
#### Photo![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/PhotoCommentAndLike%284%29.gif?raw=true) 
#### Comment![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/EditDeleteCommentAndUnlike%285%29.gif?raw=true) 
#### Searching, channel filter![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/SearchAndChannelFilter%286%29.gif?raw=true) 
####  Home page![enter image description here](https://github.com/AliYildizoz909/PhotoChannel/blob/master/Gifs/HomePage%287%29.gif?raw=true) 


