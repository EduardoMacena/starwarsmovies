//
//  InfoDevice.m
//  StarWarsMovies
//
//  Created by Eduardo Macena on 17/02/24.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(InfoDevice, NSObject)

RCT_EXTERN_METHOD(getinfo:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end
