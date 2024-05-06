import { ConfigQuery as SourceConfigQuery } from "SourceQuery/Config.query";
/** @namespace Query/Config/Query */
export class ConfigQuery extends SourceConfigQuery {
  _getTimeDateFormatFields() {
    return [
      // "use_calendar",
      // "year_range",
      // "date_fields_order",
      // "time_format"
    ];
  }
  _getStoreConfigFields() {
    return [
      "code",
      "is_active",
      "cms_home_page",
      "cms_no_route",
      "copyright",
      "timezone",
      "header_logo_src",
      "timezone",
      "title_prefix",
      "title_suffix",
      "default_display_currency_code",
      "default_keywords",
      "default_title",
      "default_description",
      "default_country",
      "downloadable_links_target_new_window",
      "secure_base_media_url",
      "logo_alt",
      "logo_height",
      "logo_width",
      "cookie_text",
      "cookie_link",
      "terms_are_enabled",
      "address_lines_quantity",
      "base_url",
      "pagination_frame",
      "pagination_frame_skip",
      "anchor_text_for_previous",
      "anchor_text_for_next",
      "reviews_are_enabled",
      "reviews_allow_guest",
      "wishlist_general_active",
      "demo_notice",
      "guest_checkout",
      "is_email_confirmation_required",
      "display_product_stock_status",
      "base_link_url",
      "show_vat_number_on_storefront",
      "show_tax_vat_number",
      "product_use_categories",
      "category_url_suffix",
      // "cookie_lifetime",
      "plp_list_mode",
      "layered_navigation_product_count_enabled",
      "region_display_all",
      "redirect_dashboard",
      "product_alert_allow_price",
      "product_alert_allow_stock",
      "newsletter_general_active",
      "newsletter_subscription_allow_guest_subscribe",
      "newsletter_subscription_confirm",
      "delivery_instore_active",
      // "storelocator_url",
      // "access_token_lifetime",
      // "is_allowed_reorder",
      // "rss_order_subscribe_allow",
      // "downloadable_disable_guest_checkout",
      // "minimun_password_length",
      "required_character_classes_number",
      ...this._getTimeDateFormatFields(),
      this.getPriceDisplayTypeField(),
    ];
  }
}

export default new ConfigQuery();
