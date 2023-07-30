package com.assistcontrolapp.repository;

import com.assistcontrolapp.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CargoRepository extends JpaRepository <Cargo, Long> {
}
