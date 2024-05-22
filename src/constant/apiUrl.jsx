export const BaseUrl = "http://locahost:8290/api/v1/";

// USER API //

export const loginUrl = `${BaseUrl}login`;
export const registerUrl = `${BaseUrl}register`;
export const banner = `${BaseUrl}banner-content-get`;
export const uploadFile = `${BaseUrl}upload-file`;
export const profileUrl = `${BaseUrl}user/profile`;
export const supportTicketUrl = `${BaseUrl}user/tickets`;
export const logHistoryUrl = `${BaseUrl}user/log-history`;
export const updateBankUrl = `${BaseUrl}user/update-bank`;
export const sendOtpUrl = `${BaseUrl}user/send-otp?o=`;
export const verifyOtpUrl = `${BaseUrl}user/verify-otp`;
export const activateAccountUrl = `${BaseUrl}activate-account`;
export const verifySMSOtpUrl = `${BaseUrl}user/verify-otp-number`;
export const verifyPasscodeUrl = `${BaseUrl}user/verify-passcode`;
export const updateProfileUrl = `${BaseUrl}user/update-user-profile`;
export const kycUpdateUrl = `${BaseUrl}user/update-profile`;
export const updateMobileNoUrl = `${BaseUrl}user/send-sms`;
export const setPassCodeUrl = `${BaseUrl}user/enable-crypto-transaction`;
export const forgotPasswordUrl = `${BaseUrl}forget`;
export const forgotPasswordOtpVerificationUrl = `${BaseUrl}password-reset-verification`;
export const resetPasswordUrl = `${BaseUrl}reset-password`;
export const bankDetailsUrl = `${BaseUrl}fiat/bank-details`;
export const announcementUrl = `${BaseUrl}adminannouncement-content-get/`;
export const removeBankUrl = `${BaseUrl}user/remove-bank`;
export const p2pNotificationUrl = `${BaseUrl}user/p2p/getNotification`;
export const referralDetailsUrl = `${BaseUrl}user/referral-details`;

/// Tickets ///

export const dsds = `${BaseUrl}faq-category/list`;
export const createTicketUrl = `${BaseUrl}user/save_support`;
export const viewTicketUrl = `${BaseUrl}user/tickets`;
export const closeTicketUrl = `${BaseUrl}user/close-ticket`;
export const newMessageTicketUrl = `${BaseUrl}user/new_message`;

///Wallet

export const depositUrl = `${BaseUrl}fiat/deposit`;
export const withdrawUrl = `${BaseUrl}fiat/withdraw`;
export const cryptoWithdrawalUrl = `${BaseUrl}crypto/withdraw`;
export const openOrderHistoryUrl = `${BaseUrl}user/open-order-history`;
export const fiatAssetUrl = `${BaseUrl}fiat/assets`;
export const cryptoAssetUrl = `${BaseUrl}crypto/assets`;
export const fiatHistoryUrl = `${BaseUrl}user/fiat-history`;
export const cryptoHistoryUrl = `${BaseUrl}crypto-history`;
export const cryptoAddressUrl = `${BaseUrl}get-crypto-address`;

/// Trade ///

export const chartUrl ="https://bxnzaopdi.kairaaexchange.com/trade/chart/history";
export const placeOrderUrl = `${BaseUrl}place-order`;
export const cancelOrderUrl = `${BaseUrl}cancel-order/`;
export const myOrderUrl = `${BaseUrl}my-order-details`;
export const pairDetailUrl = `${BaseUrl}pair-detail/`;
export const pairListUrl = `${BaseUrl}pair-list`;
export const tradeDataHistoryUrl = `${BaseUrl}trade-data-history?id=`;

/// Swap ///

export const swaphistoryUrl = `${BaseUrl}token/instantswap_history_user`;
export const swapConversionUrl = `${BaseUrl}token/fastbuy`;
export const swapcoinsUrl = `${BaseUrl}user/swapcoins`;

/// P2p ///

export const p2pgetCoinsUrl = `${BaseUrl}user/p2p/getCoins`;
export const p2pgetOrderUrl = `${BaseUrl}user/p2p/getOrders`;
export const p2pmyOrderUrl = `${BaseUrl}user/p2p/myOrders`;
export const p2pgetAdvertisementUrl = `${BaseUrl}user/p2p/getAdvertisement`;
export const p2pgetBalanceUrl = `${BaseUrl}user/wallet/getBalance`;
export const p2ppaymentGetUrl = `${BaseUrl}user/p2p/paymentGet`;
export const p2ppostAdvertisementUrl = `${BaseUrl}user/p2p/postAdvertisement`;
export const p2porderCancelUrl = `${BaseUrl}user/p2p/orderCancel`;
export const p2ptransferUrl = `${BaseUrl}user/wallet/transfer`;
export const p2pplaceOrderUrl = `${BaseUrl}user/p2p/orderCreate`;
export const p2psellerConfirmationUrl = `${BaseUrl}user/p2p/sellerConfirmation`;
export const p2pbuyerConfirmationUrl = `${BaseUrl}user/p2p/buyerConfirmation`;
export const p2pOrderStatusUrl = `${BaseUrl}user/p2p/mappingStatus`;
