package com.prac.Service;

import com.prac.Entity.Address;

import java.util.List;

public interface AddressService {

    Address saveAddress(Address ad);

    List<Address> fetchAddress();

    Address updateAddress(Address ad , Long id);

    void deleteAddressById(Long id);
}
