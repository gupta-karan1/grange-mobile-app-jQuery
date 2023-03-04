## Created with Capacitor Create App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Running this example

To run the provided example, you can use `npm start` command.

```bash
npm start
```


Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS D:\CapacitorProjects\my-app> npx cap android
[error] Unknown command: android
PS D:\CapacitorProjects\my-app> npx cap run android
√ Copying web assets from src to android\app\src\main\assets\public in 31.81ms
√ Creating capacitor.config.json in android\app\src\main\assets in 3.68ms
\ copy android [info] Inlining sourcemaps
√ copy android in 59.36ms
√ Updating Android plugins in 2.57ms
[info] Found 2 Capacitor plugins for android:
       @capacitor/camera@4.1.4
       @capacitor/splash-screen@4.2.0
√ update android in 85.51ms
√ Running Gradle build in 85.34s
× Deploying app-debug.apk to LNDAFQD6KZ9HV8QG - failed!
[error] Selected hardware device LNDAFQD6KZ9HV8QG
        Installing D:\CapacitorProjects\my-app\android\app\build\outputs\apk\debug\app-debug.apk...
        ERR_UNKNOWN: Non-zero exit code from adb: 1

        More details for this error may be available online:

                https://github.com/ionic-team/native-run/wiki/Android-Errors

PS D:\CapacitorProjects\my-app> npx cap run android
√ Copying web assets from src to android\app\src\main\assets\public in 37.77ms
√ Creating capacitor.config.json in android\app\src\main\assets in 2.73ms
\ copy android [info] Inlining sourcemaps
√ copy android in 66.65ms
√ Updating Android plugins in 3.21ms
[info] Found 2 Capacitor plugins for android:
       @capacitor/camera@4.1.4
       @capacitor/splash-screen@4.2.0
√ update android in 144.05ms
√ Please choose a target device: » Pixel 6 API 33 2 (emulator) (Pixel_6_API_33_2)
√ Running Gradle build in 3.92s
√ Deploying app-debug.apk to Pixel_6_API_33_2 in 142.03s
PS D:\CapacitorProjects\my-app>