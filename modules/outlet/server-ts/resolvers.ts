import { Outlet } from './entity/Outlet';

interface IOutlet {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  phone: string;
  taxrate_id: number;
  email: string;
  business_id: number;
  tax_rate: number;
  link_type: string;
  linked_outlets: string;
  copy_outlet: number;
}

interface OutletInput {
  input: IOutlet;
}

export const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World, after long time'}`,
  },

  Mutation: {
    addOutlet: async (
      _,
      {
        name,
        address,
        city,
        state,
        country,
        postal_code,
        phone,
        tax_rate,
        email,
        business_id,
        taxrate_id,
        link_type,
        linked_outlets,
        copy_outlet,
      }: IOutlet,
    ) => {
      // console.log(input);

      const outletExist = await Outlet.findOne({
        where: { name },
        select: ['id'],
      });

      if (outletExist) {
        return [
          {
            path: 'name',
            message: 'Already Exist Outlet',
          },
        ];
      }

      const outlet = Outlet.create({
        name,
        address,
        city,
        state,
        country,
        postal_code,
        phone,
        tax_rate,
        email,
        business_id,
        taxrate_id,
        link_type,
        linked_outlets,
        copy_outlet,
      });

      await outlet.save();

      return true;
    },
  },
};
