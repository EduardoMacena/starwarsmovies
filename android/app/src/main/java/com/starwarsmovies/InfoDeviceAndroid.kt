package com.starwarsmovies

import android.os.Build
import android.content.pm.PackageManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import org.json.JSONObject

class InfoDeviceAndroid(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "InfoDeviceAndroid"
    }

    @ReactMethod
    fun getInfo(promise: Promise) {
        val osVersion = Build.VERSION.RELEASE
        val modelName = Build.MODEL
        val appVersion = getAppVersion()

        val json = JSONObject()
        json.put("osVersion", osVersion)
        json.put("modelName", modelName)
        json.put("appVersion", appVersion)

        promise.resolve(json.toString())
    }

    private fun getAppVersion(): String {
        val packageName = reactApplicationContext.packageName
        val packageManager = reactApplicationContext.packageManager
        val packageInfo = packageManager.getPackageInfo(packageName, 0)
        return packageInfo.versionName
    }
}