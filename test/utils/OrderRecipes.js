const order = require('../../utils/OrderRecipes')

const orderTest = () =>{
    describe('orderRecipes function', ()=>{

        it('Return the recipes list in alphabetical order', (done)=> {
            const orderedList= [{title:'a'},{title:'b'},{title:'c'},{title:'d'}]
            const testList= [{title:'c'},{title:'a'},{title:'d'},{title:'b'}]
            order(testList)
            testList.should.be.eql(orderedList)
            done()
        })
    })
}

module.exports={orderTest}