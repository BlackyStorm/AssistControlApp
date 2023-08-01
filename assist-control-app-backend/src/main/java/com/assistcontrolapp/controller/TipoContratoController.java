package com.assistcontrolapp.controller;


import com.assistcontrolapp.exeption.ResourceNotFoundException;
import com.assistcontrolapp.model.TipoContrato;
import com.assistcontrolapp.repository.TipoContratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api")
public class TipoContratoController {

    @Autowired
    private TipoContratoRepository tipoContratoRepository;



    //Listar tipos de contrato
    @GetMapping("/tipoContrato")
    private List<TipoContrato> listarTiposDeContrato(){
        return tipoContratoRepository.findAll();
    }

    //guardar un nuevo tipo de contrato
    @PostMapping("/tipoContrato")
    public TipoContrato guardarTipoContrato(@RequestBody TipoContrato tipoContrato){
        return tipoContratoRepository.save(tipoContrato);
    }

    //buscar tipo de contrato por id
    @GetMapping("/tipoContrato/{id}")
    public ResponseEntity<TipoContrato> listarTipoContratoPorId(@PathVariable Long id){
        TipoContrato tipoContrato = tipoContratoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El tipo de contrato con ese ID no existe :"+ id));
        return ResponseEntity.ok(tipoContrato);
    }


    // modificar un tipo de contrato
    @PutMapping("/tipoContrato/{id}")
    public ResponseEntity<TipoContrato> actualizaTipoContrato(@PathVariable Long id, @RequestBody TipoContrato tipoContratoRequest){
        TipoContrato tipoContrato = tipoContratoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El tipo de contrato con ese ID no existe :"+ id));
        tipoContrato.setNombreTipo(tipoContratoRequest.getNombreTipo());
        tipoContrato.setCaracteristica(tipoContratoRequest.getCaracteristica());

        TipoContrato tipoContratoActualizado = tipoContratoRepository.save(tipoContrato);
        return ResponseEntity.ok(tipoContratoActualizado);
    }


    // eliminar un tipo de contrato
    @DeleteMapping("/tipoContrato/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarTipoContrato(@PathVariable Long id){
        TipoContrato tipoContrato = tipoContratoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El tipo de contrato con ese ID no existe :"+ id));
        tipoContratoRepository.delete(tipoContrato);
        Map<String,Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
