/// <reference types="multer" />
import { PipeTransform } from '@nestjs/common';
export declare class FileValidationPipe implements PipeTransform<any> {
    transform(files: {
        id?: Express.Multer.File;
        tradePermission?: Express.Multer.File;
    }): {
        id?: Express.Multer.File;
        tradePermission?: Express.Multer.File;
    };
}
