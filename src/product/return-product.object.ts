import { Prisma } from '@prisma/client';
import { returnReviewObject } from 'src/review/return-review.object';
import { returnCategoryObject } from 'src/category/return-category.object';

export const productReturnObject: Prisma.ProductSelect = {
  images: true,
  description: true,
  id: true,
  name: true,
  price: true,
  createAt: true,
  slug: true,
};

export const productReturnObjectFullest: Prisma.ProductSelect = {
  ...productReturnObject,
  reviews: {
    select: returnReviewObject,
  },
  category: { select: returnCategoryObject },
};
