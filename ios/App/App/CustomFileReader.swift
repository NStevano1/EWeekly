//
//  CustomFileReader.swift
//  App
//
//  Created by Nikola S. on 2021-05-16.
//
import Foundation
import Capacitor

struct ReturnFile : Codable {
    var fileName : String
}

@objc(CustomFileReader)
public class CustomFileReader: CAPPlugin {
    
    let encoder = JSONEncoder()
    
    @objc func getFile(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        
        // Save data to file
        let fileName = value
        let DocumentDirURL = try! FileManager.default.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
        
        let fileURL = DocumentDirURL.appendingPathComponent(fileName)
        print("FilePath: \(fileURL.path)")
        
        var readString = "" // Used to store the file contents
        do {
            // Read the file contents
            readString = try String(contentsOf: fileURL)
        } catch let error as NSError {
            print("Failed reading from URL: \(fileURL), Error: " + error.localizedDescription)
        }
        
        call.success([
                        "data": readString ])
    }
    
    @objc func getDocs(_ call: CAPPluginCall) {
        
        let DocumentDirURL = try! FileManager.default.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: false)
        let fullURL = DocumentDirURL.appendingPathComponent("/data/assets/documents")
        
        do {
            let fileList = try FileManager.default.contentsOfDirectory(at: fullURL, includingPropertiesForKeys: nil )
            var filesList : [ReturnFile] = []
            fileList.forEach { file in
                
                let fileName = file.lastPathComponent
                print("file name:")
                print(fileName)
                let rf = ReturnFile( fileName: fileName)
                filesList.append(rf)
            }
            let data = try! encoder.encode(filesList)
            
            call.success(["data": String(data: data, encoding: .utf8) ])

        } catch let error as NSError {
            print("Error")
        }
        //print("File Text: \(readString)")
        
    }
    
    
}
