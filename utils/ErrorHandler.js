
const dependencyType={
    internal:"Internal Dependency Error",
    external:"External Dependency Error"
}


class ErrorHandler extends Error 
{
    constructor(code,type,dependency,message) {
        super(message);
        this.code=code
        this.message={
            type:type,
            dependency:dependency,
            msg:message,
        }

    }

}

module.exports =
{
    ErrorHandler,
    dependencyType
}
