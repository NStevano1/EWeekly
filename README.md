# E-Briefing Mobile App

[Ionic](https://ionicframework.com/framework) based iOS mobile client for the [E-Weekly Service](https://github.com/csps-efpc-it/eWeekly-service).

## Getting started

You will need to have the [E-Briefing Service](https://github.com/cds-snc/e-briefing-service) running on a server that
is accessible from the internet.

### Prerequisites

Install `ionic` and  set up `Xcode` globally

```bash
$ npm install -g @ionic/cli
```

```bash
$ xcode-select --install
```

## Running on device or in emulator

Data on the device is downloaded from the API on first run (and optionally updated through sync any time after).

Before compiling to run on a device or in an emulator, you must configure the following properties in the 
GlobalsProvider (`src/app/providers/globals`):

- `api_key`: to be obtained from the `users` table in the service database
- `api_url`: the base api url for the service

### Set up for ios:

```bash
$ npm install
$ ionic capacitor copy ios
$ ionic cap sync
```

On first run, you will be taken to the Sync screen.

### Cross-platform

Currently this app only runs on iOS devices.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how you can pitch in, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

-------------------------------------------------------------------

# Application de breffage électronique 

Client mobile basé sur [Ionic](https://ionicframework.com/framework) pour le [service de breffage électronique](https://github.com/cds-snc/e-briefing-service#service-de-breffage-%C3%A9lectronique).

## Pour commencer

Vous devrez faire fonctionner le programme [Service breffage électronique](https://github.com/cds-snc/e-briefing-service#service-de-breffage-%C3%A9lectronique) sur un serveur qui est accessible par Internet.

### Exigences préalables

Installez Ionic globalement.

```bash
$ npm install -g @ionic/cli
```

```bash
$ xcode-select --install
```

### Faire fonctionner sur un appareil ou dans un émulateur

Les données sur l’appareil sont téléchargées à partir de l’API lors de la première utilisation (et, en option, en les téléchargeant par synchronisation pour les fois suivantes).

Avant de compiler l’application pour s'en servir sur un appareil ou dans un émulateur, vous devez configurer les propriétés suivantes en GlobalsProvider (`src/app/providers/globals`) :

- `api_key`: à obtenir dans la tablette `users`, dans la base de données du service
- `api_url`: l’url de l’API de la base pour le service

### Compiler pour ios :

```bash
$ npm install
$ ionic capacitor copy ios
$ ionic cap sync
```

À la première utilisation, vous vous retrouverez à l’écran Sync (synchronisation).

### Multiplateforme

Puisque l’application client est développée avec Ionic, l’application peut être déployée sur une variété d’appareils, y compris les appareils iOS. 

## Contribution

Veuillez lire le document [CONTRIBUTING.md](CONTRIBUTING.md) pour obtenir des renseignements sur la façon dont vous pouvez contribuer ainsi que sur le processus pour présenter des demandes de déchargement.

## Licence

Ce projet utilise la licence MIT – consultez le fichier [LICENSE.txt](LICENSE.txt) pour obtenir de plus amples renseignements.