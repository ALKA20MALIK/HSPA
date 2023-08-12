export interface IPropertyBase
{
    Id:number | null;
    SellRent:number | null;
    Name:string;
    PType: string;
    FType:string;
    Price: number | null;
    BHK:number| null;
    BuiltArea: string;
    City:string;
    RTM:string;
    Image?: string;
}