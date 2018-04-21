'use strict'

const gestmodel = use('App/Models/Guestinfo')
const storemodel = use('App/Models/StoreInfo')

class GuestinfoController {

  async invoiceok({view,session}) {
    const invoicenum = session.get('invoicenum')
    //一進來就把session清掉
    // session.clear();

    const storeinfo_1 =await storemodel.all()
    const storeinfo = storeinfo_1.toJSON()
    // console.log(storeinfo)
    return view.render('guestinfo.guestinfo', {
      invoicenum: invoicenum,
      storeinfo:storeinfo
    })
  }

  async store( { request,response,session } ){
    
    const guest_data = request.all()
    // console.log(guest_data.guest_name)
    const user = await gestmodel.find(1)
    const test = await user.StoreInfo().fetch()
    console.log(test)
    return "test"
  }
}

module.exports = GuestinfoController
