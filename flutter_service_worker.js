'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b35c84ebfe92656bfced5bf13b140d05",
"index.html": "7e7595aecac4973b8481141ca0d0e57b",
"/": "7e7595aecac4973b8481141ca0d0e57b",
"main.dart.js": "856605a9b0684c4049dcb0a71e74a846",
"favicon.png": "49a86b01af03ed23bacece826d4bc81b",
"icons/vbrr_web_512.png": "d8f5d1b81e9ca2ec368eb7067e9b3b9e",
"icons/vbrr_web_maskable_512.png": "538915e45edfce902af7533dcd183ce3",
"icons/vbrr_web_192.png": "8ec4b922455ec9276b728ea5d7ed9353",
"icons/vbrr_web_maskable_192.png": "3e8f5a2b4bae04bd0d390a3f5f407a46",
"manifest.json": "7a5d509b2c9e6228b49aa3e715179619",
"assets/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/AssetManifest.json": "ab70eb6f4754945cb0e90c071725e30b",
"assets/NOTICES": "192c728c58998792f277eabc57084c6f",
"assets/FontManifest.json": "1b6aadc38c87b9cac0f50d610ecd23af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/trading.svg": "0ea6f356afb9102867a5858cad301bfe",
"assets/assets/svg/ic_disconnect.svg": "01fec353eb6cbaf0913873d70ed759b7",
"assets/assets/svg/ic_education.svg": "71fb432093bdeb9b5a97fe51fbe86286",
"assets/assets/svg/ic_clock.svg": "be95768a427b958b3361cde7174e64d9",
"assets/assets/svg/ic_favorite.svg": "5f849e5d9b801f9c2d62f2374909986c",
"assets/assets/svg/operation_favorite.svg": "9f0d83eec6daf7e5027f0338e50c4e9c",
"assets/assets/svg/ic_time.svg": "d93aaa23493ec4870c4e6c75611b46c4",
"assets/assets/svg/ic_attach.svg": "2cb1b5c48f7a0dba68b329aa563cf911",
"assets/assets/svg/ic_share.svg": "bb531895bebfee7bde6df0d1440d5ff9",
"assets/assets/svg/ic_game.svg": "c610ce5843769d9b6d5fdb4aa3a8b04d",
"assets/assets/svg/ic_check_on.svg": "42d0ce0c92b4885b9f4e6107de50ebfe",
"assets/assets/svg/ic_arrow_back.svg": "9d63d9c1c90817b4e13edb957907fba9",
"assets/assets/svg/nav_services.svg": "86c67ad5b8394208b92e6d28a0783910",
"assets/assets/svg/ic_expand_down.svg": "d7c454ff886b1fffa7e26f697fc8b845",
"assets/assets/svg/ic_from_account.svg": "1060dfbd781cf644239712e66937b005",
"assets/assets/svg/ic_water.svg": "f956d65aa71a0166d6b1967437c7cffc",
"assets/assets/svg/ic_withdrawal.svg": "bb811eaf2b71f9f576bd6c4520328f16",
"assets/assets/svg/nav_more.svg": "54dddaf05e8bf48cdbbea22a3276b2ee",
"assets/assets/svg/logo_splash.svg": "330f496f261fe6e1a820bc5e85d0d161",
"assets/assets/svg/ic_pin.svg": "01c8545e1b1a47cc71948677050c1790",
"assets/assets/svg/operation_debit.svg": "0ed15fd2ed1ef7b3ff0119bf152432b8",
"assets/assets/svg/ic_card%2520settings.svg": "399446f39f96039016c669e2c9619fe0",
"assets/assets/svg/Polygon.svg": "3683244cad5a5234959eafc9c3d17055",
"assets/assets/svg/ic_sms.svg": "eac1555f3d61db74861424dbc20440e5",
"assets/assets/svg/ic_dragndrop.svg": "a67425ea14502726ecd256431b16a1ce",
"assets/assets/svg/ic_mobile.svg": "bc0af95bd261c484ad285646c34cc4af",
"assets/assets/svg/ic_link.svg": "dc44d085b44340c7881a5f94a6b26444",
"assets/assets/svg/ic_cash%2520in.svg": "d392053377b53391af8e8bb5c555b183",
"assets/assets/svg/ic_credit.svg": "c4aeab0f10198fa312b510ce81e34feb",
"assets/assets/svg/ic_installment.svg": "5bc5449d70f0fa0ff70fd7233f5e4d83",
"assets/assets/svg/operation_reversal.svg": "bb9e6cf9dacbacba5d54d991e634707a",
"assets/assets/svg/ic_id.svg": "a898e40a824d08a27be01ca262f1947c",
"assets/assets/svg/ic_utility%2520payments.svg": "aa9261cd415d8bc299f1cd91589dd7e4",
"assets/assets/svg/ic_route.svg": "57a09dce569517cdb9f209424a60d0cb",
"assets/assets/svg/ic_lock.svg": "21d8b94f257d847d7cdfe3b348b70cd1",
"assets/assets/svg/ic_messages.svg": "95e2def137c9956922c4071f4d54b330",
"assets/assets/svg/home.svg": "d4543548dad76a6fadafc4946b792924",
"assets/assets/svg/ic_templates%2520by%2520time.svg": "79ab4c0c73511494a495d3d00c3b5491",
"assets/assets/svg/ic_info.svg": "1cc6875542b72292d0f34b65a8135979",
"assets/assets/svg/ic_news.svg": "b1d0d5b48d6c32b72af2241e73005a10",
"assets/assets/svg/ic_face_android.svg": "c844026a1c0ee8b655ef2d18a308d9d7",
"assets/assets/svg/visa.svg": "cc2810f7afaf2ae6adccb280852fde52",
"assets/assets/svg/ic_money_bag.svg": "ec46e260a3efd3acd2bd8b438d089625",
"assets/assets/svg/ic_transfer_account_kassanova.svg": "a9bf040674c8f8d76ea39810399cb13d",
"assets/assets/svg/out.svg": "0f9a0f3f4501a517d858cde8373e096a",
"assets/assets/svg/operation_in.svg": "89c44f6b3d6243f9c284cc3b0a5ee089",
"assets/assets/svg/ic_card.svg": "c25c7119c0f02519cd1a3b3769a438ef",
"assets/assets/svg/ic_contacts.svg": "b7dea3eb1bc1d1ab59e49bd0c5665a8c",
"assets/assets/svg/ic_new_message.svg": "73ab6f5b2a459ce13a5c22369d273bbb",
"assets/assets/svg/ic_security.svg": "7e09ae582cfd18d96e17f3ba5e603591",
"assets/assets/svg/ic_checkbox_on.svg": "7a92830d985289587812033036c39054",
"assets/assets/svg/nav_history.svg": "220bc069736729b9948c1aac1e39b475",
"assets/assets/svg/vector.svg": "d22ab1e4a805074087b915afb6ef1f60",
"assets/assets/svg/ic_history.svg": "c512bd8e802a24b6f5e52e8b47d60057",
"assets/assets/svg/ic_add_account.svg": "d55874b4e7a1cb927576fced19561e09",
"assets/assets/svg/transaction%2520history%2520item%2520in.svg": "8d773f8ad48484a1ae2b90d57715bf9f",
"assets/assets/svg/ic_minus.svg": "9fb1cd32feb877ce52838aec1ece7652",
"assets/assets/svg/icw_plus.svg": "f539db19469bd236d0ce044b9d29fee9",
"assets/assets/svg/ic_graph.svg": "871bcfbc135a064b6a0969c134732354",
"assets/assets/svg/ic_qr.svg": "d735d48d2fb881475b1be52f960d5a31",
"assets/assets/svg/ic_qr%2520phone.svg": "2256bd1cc60d285d6abf55130b7d0b1b",
"assets/assets/svg/ic_notification%2520filled.svg": "28c81ca3278c360ec31c632b537a91f1",
"assets/assets/svg/service.svg": "7d88323b9e1436123c9aef6d8a25cf57",
"assets/assets/svg/ic_touch_id.svg": "d2fbf7e45537b73dd0cb1a7ce2d20482",
"assets/assets/svg/ic_balance.svg": "c4f7f72c4d5299d8eb3a6b159800c3e0",
"assets/assets/svg/ic_total%2520sales.svg": "1d9a12c0e84872129a39689718d44dec",
"assets/assets/svg/ic_angle_back.svg": "8303c1fc22a7841451f3b35c37a7aaec",
"assets/assets/svg/ic_goal.svg": "68f79dac47dcd3082b22451e51c01c62",
"assets/assets/svg/ic_favorite_active.svg": "533f23495127011738ed3be36e53d835",
"assets/assets/svg/activate_card.svg": "01db3c35172c98e7de8e3b5616db067b",
"assets/assets/svg/ic_print.svg": "a0174adde298b2c40ff1cc1069caa697",
"assets/assets/svg/ic_limits.svg": "58529c7f340512cdb298947554fc075c",
"assets/assets/svg/in.svg": "cf913d9010d1034a226e39771ebe9d32",
"assets/assets/svg/ic_status_block.svg": "d1d6b426c607ab78471eea30377ad6d4",
"assets/assets/svg/up.svg": "065fe539cd8357bc4ce9722d0cfda227",
"assets/assets/svg/ic_camera.svg": "000c80ca066abb51da6b0eca1dcdef48",
"assets/assets/svg/ic_user.svg": "7a5defda85b430ee62c47a3e9f0510c6",
"assets/assets/svg/ill_card.svg": "7991c6cb7fc856489ba6885f3d93608d",
"assets/assets/svg/ic_language.svg": "8bae42149e24ca05d539f40b4bd249f1",
"assets/assets/svg/ic_fingerprint_android.svg": "f9da17cf7c354491bccacbcd93734875",
"assets/assets/svg/ic_documents.svg": "40e291c5adba00693532a1acd7ad3829",
"assets/assets/svg/store.svg": "edd26ee620f767fbc8c536c951740b4b",
"assets/assets/svg/ic_payments.svg": "28a55f608cf981736426877ab73eced4",
"assets/assets/svg/icw_angle.svg": "5ca358fde7f2ea376e000519d3027664",
"assets/assets/svg/ic_another_card.svg": "262bf3556525ca9ca50514e0f3964592",
"assets/assets/svg/ic_client%2520settings.svg": "af506d434e60763ec88e37e961bbdd6a",
"assets/assets/svg/ic_manage_cards.svg": "64ad9803230a5cccff9c598eab20633e",
"assets/assets/svg/ic_portfolio.svg": "84d0b43fb343070124750ca7e72119b0",
"assets/assets/svg/nav_offers.svg": "a7b1d3853817e04735bce00fca73c844",
"assets/assets/svg/ic_reload.svg": "fe1ccc9af6c5a1b891724e1cdf1aa55c",
"assets/assets/svg/title.svg": "45d7473bce21ea84256a28b979ae66e9",
"assets/assets/svg/ic_currency_sell.svg": "f0cfb12fb3e0127cce3928b339676344",
"assets/assets/svg/ic_notification.svg": "0bfbbac3c996a395b9c9d6336f6e9f73",
"assets/assets/svg/ic_cardless.svg": "3bd2eca9b70d3198c6ba0be5856352c6",
"assets/assets/svg/ic_deposit_close.svg": "6af2f068b53417066fd19a3c2d71f32a",
"assets/assets/svg/ic_atm.svg": "ae81463d07fcb6e499c4eb22dbb51af8",
"assets/assets/svg/ic_offers.svg": "7635ee3ac4f95e467e8c979e1eb63bc6",
"assets/assets/svg/ic_face_fingerprint_android.svg": "9f1d10688c3f86d848fab5e152b2b3fa",
"assets/assets/svg/ic_calendar.svg": "4ab6ede1f219b031974fe02591c68df9",
"assets/assets/svg/ic_transfer_card_kassanova.svg": "590b264296594bf9a636a467b2b2f769",
"assets/assets/svg/ic_loan%2520MTI.svg": "bb3fdfb2da8161e3117b4003a007822b",
"assets/assets/svg/ic_menu_burger.svg": "7a1fa5915045e8e935911d385fc8a08e",
"assets/assets/svg/ic_nfc.svg": "7e70a8f5e299187e0b44d1f3d91f98da",
"assets/assets/svg/ic_accounts.svg": "d39eaa61086afc5050093c5bfbbcadb4",
"assets/assets/svg/ic_new%2520card.svg": "bca3d72a2eb7575b61807c4a57538adc",
"assets/assets/svg/ic_media.svg": "134a65c5f45ee3c276726894c121a0bc",
"assets/assets/svg/ic_unlock.svg": "14a65598383806e7d22a5c21525627d4",
"assets/assets/svg/ic_merchant.svg": "c77e7cae64435d22578d7f7e076d8ad3",
"assets/assets/svg/wallet.svg": "0ac7afc4c66d437e0d28298e58cbb9c7",
"assets/assets/svg/ic_arrow_left.svg": "9236176caabfa3b7d9cf6d404652b5ff",
"assets/assets/svg/ill-wallet1.svg": "0ac7afc4c66d437e0d28298e58cbb9c7",
"assets/assets/svg/operation_out.svg": "73977eaf83d6361708b19f48780793d4",
"assets/assets/svg/ill-wallet_pink.svg": "270aefb750ae5451a04ed0dcc629200a",
"assets/assets/svg/ic_unlink.svg": "32aab7ae482bfcb19a4e0cf8dded3a55",
"assets/assets/svg/ic_trash.svg": "082d132ed2356b39067bead2e02a0a26",
"assets/assets/svg/ic_application.svg": "29619299c19fcde172cba99b5eea153f",
"assets/assets/svg/ic_arrow_right.svg": "0a8e5202768bc5596e7aa89e5da57ce6",
"assets/assets/svg/ic_bubbles.svg": "6469b98250c63681e3d5fe26082996fc",
"assets/assets/svg/ic_comission%2520history.svg": "228318e4213a7b40a5286e03bcc28fa2",
"assets/assets/svg/ic_to_card.svg": "9dc5550992c2f5993a6be8fc92ab4259",
"assets/assets/svg/ic_applications.svg": "7b78fd7e6b483dc15fd8baeee4e045d6",
"assets/assets/svg/ic_map.svg": "3292c4739950258939eb6c0f4a7a5364",
"assets/assets/svg/ic_cash%2520out.svg": "aa8e81949ab924921cd7e8bd12bde5f8",
"assets/assets/svg/nav_marketplace.svg": "b61e481ffb4557a243d17307ee1ae791",
"assets/assets/svg/ic_insurance.svg": "5f1252a28f33f234e4f8998d36447517",
"assets/assets/svg/ic_actions.svg": "e55c8772e53352cd1c867c3ceb09165d",
"assets/assets/svg/close.svg": "1f17a7065eaf95f0bb3bafe54ca21c1a",
"assets/assets/svg/Asset2.svg": "c64e67f33ec8aff86bf9a224c4df53e6",
"assets/assets/svg/mini_wallet.svg": "2c1825794ce19d57db30a54d7d94825e",
"assets/assets/svg/ill-success.svg": "c364750fe21de7277161a5ced38f9e3c",
"assets/assets/svg/ic_transfer.svg": "af3d6fb42df684a86802cb74b937f045",
"assets/assets/svg/ic_android_face_fingerprint.svg": "1b917935c7993fe360560516c58d4b48",
"assets/assets/svg/ic_terms%2520and%2520conditions.svg": "495b6602f9a3f69ef1dce22fec876e02",
"assets/assets/svg/ic_product.svg": "b7831d52b1457594f55892cc372ae880",
"assets/assets/svg/ic_government.svg": "deb4056b87d85efe70faf45725b70d6d",
"assets/assets/svg/message.svg": "67b82a1bccbf6e6aae37be2068b4da56",
"assets/assets/svg/ic_checkbox_off.svg": "3199c1cd61c8c57f9c6f89af80269f12",
"assets/assets/svg/nav_transfers.svg": "3c40aa77f7191eb57886b353a67292d9",
"assets/assets/svg/ic_contact_rounded.svg": "5d10046c5ff64bcda109ee0ef562c6bc",
"assets/assets/svg/ic_sync.svg": "c78051183737784c6691f46028477b45",
"assets/assets/svg/ic_currency%2520exchange.svg": "83da9263c4c4fa27d7c818043069ec32",
"assets/assets/svg/ic_add_rounded_plus.svg": "33fde53491095cc9223ba2518da00399",
"assets/assets/svg/ic_phone%2520transfers.svg": "284889bebd708df1b7eaf82b6e3a81db",
"assets/assets/svg/ic_currency_buy.svg": "59fb823de0a9b858602eb70a0306a02a",
"assets/assets/svg/operation_pending.svg": "1bd2a28120bbabb4d35120a6b317de0c",
"assets/assets/svg/ic_agent.svg": "f8316d2e59273e6d06627740b8221555",
"assets/assets/svg/mastercard.svg": "b042fa802cc4017d32e95a008493cfa3",
"assets/assets/svg/mir.svg": "f3f3746e47aeb2ea238058bc38024053",
"assets/assets/svg/ic_flights.svg": "5da4014609eda26ee4ac8b8230dd3f29",
"assets/assets/svg/ic_deposit.svg": "0851002ef513f41fabcbd7d080b18651",
"assets/assets/svg/ic_tv.svg": "4fbbe0b20babd13ba7293f03d12dcf89",
"assets/assets/svg/ic_send_filled.svg": "86e73ab132279621b659913dd2b162cc",
"assets/assets/svg/nav_home.svg": "30eedc3fd69cf8061f820ce6b2b6c27d",
"assets/assets/svg/ic_tax.svg": "f084a5b159e19cf56463a673e929eb2e",
"assets/assets/svg/ic_sms%2520service.svg": "f08a1c9d7838843dbba2db35bd87e18f",
"assets/assets/svg/sbp.svg": "3161c8c0251c1d2d9ca5c69c7ace4d88",
"assets/assets/svg/ic_more_circles.svg": "6dcb9abd0b6e8fe9bb298ed07a9ec4bc",
"assets/assets/svg/ic_transactions.svg": "c873184a29822e06b20206abe813ae12",
"assets/assets/svg/ic_appearance.svg": "9dbb6f2aad02241eefc95f9493520d41",
"assets/assets/svg/ic_check.svg": "e033f46d22a848b3ce6d50aaf27e5d5e",
"assets/assets/svg/ic_add_card.svg": "3b20820a461273f48b61f8fabfb454ec",
"assets/assets/svg/ic_food.svg": "ccd02174b47502e37cea41da9518ded1",
"assets/assets/svg/ic_menu.svg": "1148ab49af806facfc00cefa651b9ae2",
"assets/assets/svg/wallet_background.svg": "d5fc8b316240f2a3197d376c628cd3a7",
"assets/assets/svg/ic_by.svg": "dbf300317fe6b3f4e693c89aff820786",
"assets/assets/svg/ic_growing_down.svg": "c6ff97063a4c7f7310b7b0d30ebe5446",
"assets/assets/svg/ic_eye_on.svg": "3b5fa51fef66e5dc623a821b836f2b00",
"assets/assets/svg/ic_growing.svg": "50c6714d053f3c9f32b9a3abbd0fc576",
"assets/assets/svg/ill-wallet.svg": "9fbb83ffe23f60fc1ddcc4c4fe257d8d",
"assets/assets/svg/ic_choose.svg": "fba782432d98fa96fa7705447792f7e4",
"assets/assets/svg/ic_graph%2520sticks.svg": "e87c0ea8088a032783abd86376d58a44",
"assets/assets/svg/ic_wallet.svg": "e86b66551f4e65e547e24413e4d01b55",
"assets/assets/svg/ic_transfer_bank.svg": "41020ad1501b9b835e197d28e4867627",
"assets/assets/svg/ic_filters.svg": "92ddf30ea0d96e43b933cc8d77a18996",
"assets/assets/svg/ic_account.svg": "0bddd7084a181056255ec84b33ae0a55",
"assets/assets/svg/without_docs.svg": "68e1dd4c74b69546d48df94a9795251c",
"assets/assets/svg/marketplace.svg": "b61e481ffb4557a243d17307ee1ae791",
"assets/assets/svg/ic_send.svg": "71f50b3aea4cf3469921f34d2f731b55",
"assets/assets/svg/ic_delete_text.svg": "cbb5381ce2ee41ddfb93e365b47734b2",
"assets/assets/svg/operation_credit.svg": "6d1e401c312e5950f6e96d785bbece04",
"assets/assets/svg/ic_face_id.svg": "8ecba4480aa7e26534a92da702b11a33",
"assets/assets/svg/logo_small.svg": "12f8032aee8431ef5de1504593fcb013",
"assets/assets/svg/ic_hcs.svg": "50ad9340a683579b2b1715392645cf6d",
"assets/assets/svg/ic_loan_repay.svg": "fdf14bb23daeb58ff80170d3d8e1d168",
"assets/assets/svg/ic_purchase.svg": "5cc947fc3e525c8a47c54cccb1c355ba",
"assets/assets/svg/ic_client%2520registration.svg": "591d44ab280e32c49b818bafc48a483f",
"assets/assets/svg/ic_repeat.svg": "b984321a98ca6c787c0fa3d9326b5a5e",
"assets/assets/svg/ic_mpin.svg": "3b64774386cf66f69d8f563e1b3292ae",
"assets/assets/svg/ic_more%2520dots.svg": "20e30c1abfee16e70c3703e1dcb48c52",
"assets/assets/svg/ic_incoming.svg": "dfdb380da5f205ea00b37266075dbe73",
"assets/assets/svg/ic_loan_kassanova.svg": "740c4b83e37d4b399b9bc7aa8e6090f2",
"assets/assets/svg/operation_canceled.svg": "d6f00278cc360808748381da23ab1673",
"assets/assets/svg/ic_topup_deposit.svg": "c0969eb7c362f5f96e45f3fed0f83e6a",
"assets/assets/svg/ic_currency%2520symbol.svg": "7a1cf8dd4a8ba75fc1db20395603d4bb",
"assets/assets/svg/ic_electricity%2520copy.svg": "a6ffe52d7a4db52d5e77feb359d464de",
"assets/assets/svg/ic_eye_off.svg": "d39243c7e767135d98df888bd2664b58",
"assets/assets/svg/ic_electricity.svg": "ef5e659557fa0f60330bba2e7cbf1634",
"assets/assets/svg/nav_trading.svg": "fbedd206c18c6b0be9d77d2f50895f45",
"assets/assets/svg/ic_settings.svg": "99e528ff477555e9fffe81352505ff5a",
"assets/assets/svg/payments.svg": "d6772d10338fcd421427fc6e11cd37a4",
"assets/assets/svg/ic_copy.svg": "afbeaa5cc1467b5557f95563bf693b0d",
"assets/assets/svg/ic_card%2520transfers.svg": "593b6ca10edc9c0651377ddc7c9f2706",
"assets/assets/svg/operation_success.svg": "80dc840a84f2e92ec96b65eaeb4ac097",
"assets/assets/svg/ic_status_access_time.svg": "114e6e9269ead88bcce6c320518e45e3",
"assets/assets/svg/ic_search.svg": "6adcd8225d06874347de31c67645e1b1",
"assets/assets/svg/ic_PFM.svg": "616676ecfc37409d1a4346bc6944a067",
"assets/assets/svg/ic_train%2520ticket.svg": "9b71e1eaefbc9d806feb4e4a60dc8ec6",
"assets/assets/svg/ic_loan.svg": "93d496e5ba14c08ee07d6572150750e2",
"assets/assets/svg/logo.svg": "330f496f261fe6e1a820bc5e85d0d161",
"assets/assets/svg/ic_bond.svg": "808c64436b988cba38e5e6108c889d74",
"assets/assets/svg/my_profile.svg": "91b2e1bf8519b118f3297fd798ea7077",
"assets/assets/svg/nav_payments.svg": "03ce243dc818d1ebdad9d00abe8b34df",
"assets/assets/svg/ic_sbp.svg": "edf5ade8ec52777ff6b427e1c1ef38a2",
"assets/assets/svg/ic_alert.svg": "3e428cc4eca6f794d3234f5176b9ec6f",
"assets/assets/svg/ic_delete%2520text.svg": "fedb57ea7d7669d3ea62293804d81036",
"assets/assets/svg/ic_discounts.svg": "6aeda18ede04ed61d0115f97467eacb6",
"assets/assets/svg/ic_rates.svg": "e6f81aac4d63a4c8aa8e05811a602f33",
"assets/assets/svg/ic_expand_down_android.svg": "262947b7d6b0e971b0a6190fd7a4ab72",
"assets/assets/svg/ic_to%2520wallet.svg": "65cd0ba8377552bc7d765e69d6ebf485",
"assets/assets/svg/ic_cash.svg": "a367dca227a5b64ec55b472f9c11acbd",
"assets/assets/svg/ic_edit.svg": "56c70296004bcb26ec0115c723f12f8a",
"assets/assets/svg/ic_cashback.svg": "07b15532ce2e40311355d6d364492041",
"assets/assets/svg/ic_geo.svg": "b4b93da5574a5cd048e291c79d9f3361",
"assets/assets/svg/ic_internet.svg": "acf5bdeac2f8880f0c6ff849aee87010",
"assets/assets/svg/ic_transfers%2520and%2520payments%2520history.svg": "86ce98d2e8cfd799b03c8029afe697c0",
"assets/assets/svg/avatar.svg": "7e4567822369177da90fd7b3d174b96e",
"assets/assets/svg/ic_from_wallet.svg": "5b526d1e2bc79001928fa01021f9a7dc",
"assets/assets/svg/ic_cancel.svg": "180a68515f7566c1d4177ce5b31708cc",
"assets/assets/svg/ic_upgrade%2520as%2520agent.svg": "ec95e38a05a8d081449d5b860fb780ce",
"assets/assets/svg/fromcard.svg": "e10ec2b9fda96719d59f09c0151332bc",
"assets/assets/svg/ic_stock.svg": "e8f5e2bd15c244c2652317eff3887fa0",
"assets/assets/svg/ic_export.svg": "145e5a9345cec3e2d792332219f018d9",
"assets/assets/svg/ic_logout.svg": "09f9da4f2ee911d019f9a137b60ca413",
"assets/assets/svg/ic_FAQ.svg": "702479e77211c03ce0c70293d156981a",
"assets/assets/svg/ic_more.svg": "20e30c1abfee16e70c3703e1dcb48c52",
"assets/assets/svg/ic_clipboard.svg": "276829bd5a90dbb511002b1ba773f14d",
"assets/assets/svg/sbp-payments.svg": "f3380fa9b87d74f1e6a58b96ad1ee194",
"assets/assets/svg/ic_document.svg": "471a6443f4b84cc66e9396a62c2c5cab",
"assets/assets/svg/ic_topup.svg": "535ca69ef8eef9c037ab4544fb5c918b",
"assets/assets/rive/systemerror.riv": "58e3992c198ba64280100fc5e53632e4",
"assets/assets/rive/loading.riv": "de5a08ba880a5a80eb5f2d05f9cf86e2",
"assets/assets/png/banner2.png": "14dae1d8b9072414acef6b53fa89a43b",
"assets/assets/png/banner3.png": "5f26f5093c2770a45ac64cd0faa74c96",
"assets/assets/png/banner1.png": "147e92c6735a1385be80a86a38cd10a7",
"assets/assets/fonts/Inter-Medium.ttf": "ae9712b9b3e981f170785acb32a2d31f",
"assets/assets/fonts/Inter-Light.ttf": "b6c3d65fa03578e221b6fb074c21e857",
"assets/assets/fonts/Inter-ExtraLightItalic.ttf": "14bbbe826b15908f22c6883170d7cc43",
"assets/assets/fonts/Inter-SemiBoldItalic.ttf": "7499ab7e9217895c4d95696677987960",
"assets/assets/fonts/Inter-Thin.ttf": "b39482b0a7617102627cddaefc888d94",
"assets/assets/fonts/Inter-Bold.ttf": "8827820cd1e6f5d29a4a8ebe1193f743",
"assets/assets/fonts/Inter-Regular.ttf": "5f9ed9cb894be42e9badfd98e4c8d010",
"assets/assets/fonts/Inter-LightItalic.ttf": "7447420848f7122472994c11602d4b19",
"assets/assets/fonts/Inter-ExtraBold.ttf": "de42dfdf1f0dd9dcb1116a46f4cde601",
"assets/assets/fonts/Inter-ThinItalic.ttf": "18c57193d2a93ccf1316b441f3c750b0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "be4f2ca804096b149679314931ded5bb",
"assets/assets/fonts/Inter-BoldItalic.ttf": "7b1fbefd0cd42e6cddcc9f196c439a58",
"assets/assets/fonts/Inter-ExtraBoldItalic.ttf": "d13ad2079af4abeac69dc480fb17d27b",
"assets/assets/fonts/Inter-MediumItalic.ttf": "cff9a377611261a76df3e02791c6ac15",
"assets/assets/fonts/Inter-Black.ttf": "f436a2a904ea7ef3a263ebdf94f5992d",
"assets/assets/fonts/Inter-Italic.ttf": "ebd2472434b810fc94f255b5c8cac8a4",
"assets/assets/fonts/Inter-BlackItalic.ttf": "160ab4811b8b6a434d18943eb56a60f2",
"assets/assets/fonts/Inter-SemiBold.ttf": "fad3b216e64fcea69020bce4803c4dc3",
"assets/assets/themes/logo_small_F7RCRLLBHfD8PTt20eJIwN.png": "aaa09e97fe65357fed0a7b655cf2d725",
"assets/assets/themes/wallet%2520bg_F7RCRLLBHfD8PTt20eJIwN.png": "820a24cb56fc593871666192628247e2",
"assets/assets/themes/bg_F7RCRLLBHfD8PTt20eJIwN.png": "cd53c08f706756a76de5c0a84d551345",
"assets/assets/themes/logo_F7RCRLLBHfD8PTt20eJIwN.png": "cc80a3c75ac0f1e790a45e3e44de7791",
"assets/assets/themes/logo_splash_F7RCRLLBHfD8PTt20eJIwN.png": "cc80a3c75ac0f1e790a45e3e44de7791",
"assets/assets/themes/icon_louncher_F7RCRLLBHfD8PTt20eJIwN.png": "2fde8314e8c7b1d936e8d8551152f16e",
"assets/assets/themes/ill_credit_F7RCRLLBHfD8PTt20eJIwN.png": "501999018bc0b2027490524d851fe05e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
