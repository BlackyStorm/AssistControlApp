package com.assistcontrolapp.controller;

import com.assistcontrolapp.exeption.ResourceNotFoundException;
import com.assistcontrolapp.model.Contrato;
import com.assistcontrolapp.repository.ContratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class ContratoController {

    @Autowired
    private ContratoRepository contratoRepository;

    // listar contratos
    @GetMapping("/contratos")
    private List<Contrato> listarContratos(){
        return contratoRepository.findAll();
    }

    //Guardar Contrato
    @PostMapping("/contratos")
    public Contrato guardarContrato(@RequestBody Contrato contrato) {
        return contratoRepository.save(contrato);
    }

    //Buscar contrato por id
    @GetMapping("/contratos/{id}")
    public ResponseEntity<Contrato> listarCotratoPorId(@PathVariable Long id){
        Contrato contrato = contratoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El contrato con ese ID no existe :"+ id));
        return ResponseEntity.ok(contrato);

    }

    // Actualizar contrato
    @PutMapping("/contrato/{id}")
    public ResponseEntity<Contrato> actualizarContrato(@PathVariable Long id, @RequestBody Contrato contratoRequest){
        Contrato contrato = contratoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El contrato con ese ID no existe :"+ id));
        contrato.setIdTipoContrato(contratoRequest.getIdTipoContrato());
        contrato.setSueldo(contratoRequest.getSueldo());

        Contrato contratoActualizado = contratoRepository.save(contrato);

        return ResponseEntity.ok(contratoActualizado);
    }


    //eliminar contrato
    @DeleteMapping("/contratos/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarContrato(@PathVariable Long id){
        Contrato contrato = contratoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El contrato con ese ID no existe :"+ id));

        contratoRepository.delete(contrato);

        Map<String,Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return ResponseEntity.ok(response);

    }

}
