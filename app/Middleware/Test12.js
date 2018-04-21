'use strict'

const Awards = use('App/Models/Adonisinvoice')

class Checkinvoice {
  async handle ({ request,session,response }, next) {
    // call next to advance the request
    console.log(session.get('invoicenum'))
    const invoicenum = session.get('invoicenum')
    const winning = await Awards
    .query()
    .where('invoice_num', invoicenum)
    .getCount()    

    if(winning == 0){
      return response.redirect('back');
    }
    else{
      await next()
    }
  }
}

module.exports = Test12
