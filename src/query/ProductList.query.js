
import  { ProductListQuery as SourceProductListQuery }  from 'SourceQuery/ProductList.query';

/**
 * Product List Query
 * @class ProductListQuery
 * @namespace Query/ProductList/Query */
export class ProductListQuery extends  SourceProductListQuery {

    _getCartProductInterfaceFields() {
        return [
            'uid',
            'id',
            'sku',
            'name',
            'type_id',
            'stock_status',
            'url',
            // 'salable_qty',
            this._getStockItemField(),
            this._getProductThumbnailField(),
            this._getCartConfigurableProductFragment(),
            this._getAttributesField(false, true),
            this._getProductLinksField()
        ];
    }

    _getCartProductField() {
        return new Field('product')
            .addFieldList([
                'id',
                'sku',
                'stock_status',
                // 'salable_qty',
                this._getStockItemField(),
                this._getProductThumbnailField(),
                this._getAttributesField(true, true)
            ]);
    }

    _getProductInterfaceFields(isVariant, isForLinkedProducts = false, isForWishlist = false) {
        const {
            isPlp = false,
            isSingleProduct,
            noAttributes = false,
            noVariants = false,
            noVariantAttributes = false
        } = this.options;

        // set option to always request images for product variants if they're requested for wishlist
        if (isForWishlist) {
            this.options.isForWishlist = true;
        }

        // Basic fields returned always
        const fields = [
            'uid',
            'id',
            'sku',
            'name',
            'type_id',
            'stock_status',
            // 'salable_qty',
            this._getStockItemField(),
            this._getPriceRangeField()
        ];

        // Additional fields, which we want to return always, except when it's variants on PLP (due to hugh number of items)
        if (!(isPlp && isVariant) || isForWishlist) {
            fields.push(
                this._getProductImageField(),
                this._getProductThumbnailField(),
                this._getProductSmallField(),
                this._getShortDescriptionField(),
                'special_from_date',
                'special_to_date',
                this._getTierPricesField()
            );
        }

        // if it is normal product and we need attributes
        // or if, it is variant, but we need variant attributes or variants them-self
        if ((!isVariant && !noAttributes) || (isVariant && !noVariantAttributes && !noVariants)) {
            fields.push(this._getAttributesField(isVariant));
        }

        // to all products (non-variants)
        if (!isVariant) {
            fields.push(
                'url',
                this._getUrlRewritesFields(),
                this._getReviewCountField(),
                this._getRatingSummaryField(),
                this._getCustomizableProductFragment()
            );

            // if variants are not needed
            if (!noVariants) {
                fields.push(
                    this._getConfigurableProductFragment(),
                    this._getBundleProductFragment(),
                    this._getGroupedProductItems()
                );
            }
        }

        // prevent linked products from looping
        if (isForLinkedProducts) {
            fields.push(this._getProductLinksField());
        }

        // additional information to PDP loads
        if (isSingleProduct) {
            fields.push(
                'stock_status',
                this._getDescriptionField(),
                this._getMediaGalleryField(),
                this._getSimpleProductFragment()
            );

            // for variants of PDP requested product
            if (!isVariant) {
                fields.push(
                    'canonical_url',
                    'meta_title',
                    'meta_keyword',
                    'meta_description',
                    this._getCategoriesField(),
                    this._getReviewsField(),
                    this._getVirtualProductFragment(),
                    this._getCustomizableProductFragment(),
                    this._getProductLinksField()
                );
            }
        }

        return fields;
    }


}

export default new ProductListQuery();
