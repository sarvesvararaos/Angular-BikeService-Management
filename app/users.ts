export class Users {
    public Id:number;
    public Username:string;
    public FirstName:string;
    public LastName:string;
    public Email:string;
    public Passowrd:string;
    public ConfirmPassword:string;
    public Phone:string;

    constructor(Id:number,Username:string,FirstName:string,LastName:string,Email:string,Passowrd:string,ConfirmPassword:string,Phone:string)
    {
        this.Id=Id,
        this.Username=Username,
        this.FirstName=FirstName,
        this.LastName=LastName,
        this.Email=Email,
        this.Passowrd=Passowrd,
        this.ConfirmPassword=ConfirmPassword,
        this.Phone=Phone;
    }
}
