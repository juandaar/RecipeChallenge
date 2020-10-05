
const dependencyType={
    internal:"Internal Dependency Error",
    external:"External Dependency Error"
}


class ErrorHandler extends Error 
{
    constructor(type,dependency,message) {
        super(message);
        this.type=type;
        this.dependency=dependency;
        this.msg=message;
    }

}

module.exports =
{
    ErrorHandler,
    dependencyType
}
