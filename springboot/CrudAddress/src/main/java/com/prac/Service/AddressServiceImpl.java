package com.prac.Service;

import com.prac.Entity.Address;
import com.prac.Repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class AddressServiceImpl implements AddressService{

    @Autowired
    private AddressRepo addressRepo;

    @Override
    public Address saveAddress(Address ad) {
      return   addressRepo.save(ad);
    }

    @Override
    public List<Address> fetchAddress() {
        return (List<Address>) addressRepo.findAll();
    }

    @Override
    public Address updateAddress(Address ad, Long id) {
        Optional<Address> AddressOptional = addressRepo.findById(Math.toIntExact(id));
        if (AddressOptional.isPresent()) {
            Address existingAddress = AddressOptional.get();
            existingAddress.setCity(ad.getCity());

            existingAddress.setPincode(ad.getPincode());
            existingAddress.setState(ad.getState());

            return addressRepo.save(existingAddress);

        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }

    @Override
    public void deleteAddressById(Long id) {
        addressRepo.deleteById(Math.toIntExact(id));
    }
}
