/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/

export interface RFC {
    dateRequested: Date;
    requestDescription: string ;
    reasonForRequest: string ;
    CSRF_token: string ;
    site_ID: string ;
}
