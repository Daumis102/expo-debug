# Setting project up

Download google-services.json file from Firebase for the app and put it in the root folder. It is set up to be gitignored as it contains sensitive data.
At the time of writing (2024-03) it can be found in 
```
Firebase -> Trendd -> Project Settings -> General -> Your apps section -> google-services.json
```

When building through AES, it does not upload this file automatically. A file based secret has to be created in AES, which is then available in AES Cloud build.

Creating this secret is done with the following cmd:
```
eas secret:create --scope project --name GOOGLE_SERVICES_JSON --type file --value ./google-services.json```
