//
//  CustomFileReaderCapacitor.m
//  App
//
//  Created by Nikola S. on 2021-05-16.
//

#import <Capacitor/Capacitor.h>

CAP_PLUGIN(CustomFileReader, "CustomFileReader",
  CAP_PLUGIN_METHOD(getFile, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(getDocs, CAPPluginReturnPromise);
)
